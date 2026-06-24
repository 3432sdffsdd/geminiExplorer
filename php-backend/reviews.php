<?php
/**
 * Gemini Explorer - Reviews API (PHP / JSON file storage)
 *
 * Endpoints (all on this single file):
 *   GET    reviews.php              -> list APPROVED reviews (public)
 *   GET    reviews.php?all=true     -> list ALL reviews (admin)
 *   POST   reviews.php              -> submit a new review (approved=false)
 *   PATCH  reviews.php?id=ID        -> update fields (approve/feature/etc.)
 *   DELETE reviews.php?id=ID        -> delete a review
 *
 * Data is stored in reviews.json next to this file.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Admin-Password");
header("Content-Type: application/json; charset=utf-8");

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$DATA_FILE = __DIR__ . '/reviews.json';

// Admin password required for admin actions (listing all, approve, feature, delete).
// ⚠️ CHANGE THIS before deploying! It must match the password in the admin page.
$ADMIN_PASSWORD = "gemini2026"; // <-- CHANGE THIS

function require_admin($expected) {
    $provided = isset($_SERVER['HTTP_X_ADMIN_PASSWORD']) ? $_SERVER['HTTP_X_ADMIN_PASSWORD'] : '';
    if (!hash_equals($expected, $provided)) {
        http_response_code(401);
        echo json_encode(["error" => "Unauthorized. Admin password required."]);
        exit;
    }
}

function read_reviews($file) {
    if (!file_exists($file)) return [];
    $contents = file_get_contents($file);
    $data = json_decode($contents, true);
    return is_array($data) ? $data : [];
}

function write_reviews($file, $reviews) {
    $fp = fopen($file, 'c+');
    if ($fp === false) return false;
    flock($fp, LOCK_EX);
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode(
        array_values($reviews),
        JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
    ));
    fflush($fp);
    flock($fp, LOCK_UN);
    fclose($fp);
    return true;
}

function json_body() {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

$method  = $_SERVER['REQUEST_METHOD'];
$reviews = read_reviews($DATA_FILE);

/* ---------- GET ---------- */
if ($method === 'GET') {
    $all = isset($_GET['all']) && $_GET['all'] === 'true';
    if ($all) {
        require_admin($ADMIN_PASSWORD);
        echo json_encode(array_values($reviews));
    } else {
        // Public list: let browsers/CDN cache briefly so repeat visits are instant
        // and the PHP file is hit less under load. New approvals appear within ~30s.
        header("Cache-Control: public, max-age=30");
        $approved = array_filter($reviews, function ($r) {
            return !empty($r['approved']);
        });
        echo json_encode(array_values($approved));
    }
    exit;
}

/* ---------- POST (create) ---------- */
if ($method === 'POST') {
    $body   = json_body();
    $name   = trim($body['name']   ?? '');
    $review = trim($body['review'] ?? '');
    $rating = intval($body['rating'] ?? 0);

    if ($name === '' || $review === '' || $rating < 1) {
        http_response_code(400);
        echo json_encode(["error" => "Name, review, and rating are required."]);
        exit;
    }

    $maxId = 0;
    foreach ($reviews as $r) {
        if (isset($r['id']) && $r['id'] > $maxId) $maxId = $r['id'];
    }

    $newReview = [
        "id"          => $maxId + 1,
        "name"        => $name,
        "location"    => trim($body['location'] ?? ''),
        "tourPackage" => trim($body['tourPackage'] ?? ''),
        "rating"      => $rating,
        "review"      => $review,
        "travelDate"  => $body['travelDate'] ?? '',
        "approved"    => false,
        "featured"    => false,
        "createdAt"   => gmdate("Y-m-d\TH:i:s\Z"),
    ];

    $reviews[] = $newReview;
    write_reviews($DATA_FILE, $reviews);

    http_response_code(201);
    echo json_encode(["success" => true, "review" => $newReview]);
    exit;
}

/* ---------- The rest need an id ---------- */
$id = isset($_GET['id']) ? intval($_GET['id']) : null;
if ($id === null) {
    http_response_code(400);
    echo json_encode(["error" => "Missing review id."]);
    exit;
}

$idx = -1;
foreach ($reviews as $i => $r) {
    if (isset($r['id']) && intval($r['id']) === $id) { $idx = $i; break; }
}
if ($idx === -1) {
    http_response_code(404);
    echo json_encode(["error" => "Review not found."]);
    exit;
}

/* ---------- PATCH (update) ---------- */
if ($method === 'PATCH') {
    require_admin($ADMIN_PASSWORD);
    $body = json_body();
    foreach ($body as $key => $value) {
        if ($key === 'id') continue;
        if ($key === 'approved' || $key === 'featured') {
            $reviews[$idx][$key] = (bool) $value;
        } else {
            $reviews[$idx][$key] = $value;
        }
    }
    write_reviews($DATA_FILE, $reviews);
    echo json_encode(["success" => true, "review" => $reviews[$idx]]);
    exit;
}

/* ---------- DELETE ---------- */
if ($method === 'DELETE') {
    require_admin($ADMIN_PASSWORD);
    array_splice($reviews, $idx, 1);
    write_reviews($DATA_FILE, $reviews);
    echo json_encode(["success" => true]);
    exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed."]);
