# Reviews Backend (PHP + JSON)

This folder is the **backend** for the reviews system. It runs on any Linux/cPanel
hosting that supports PHP (no Node.js, no database needed).

## Files

- `reviews.php` — the API (handles list / submit / approve / feature / delete)
- `reviews.json` — where the reviews are stored (must be **writable** by the server)

## How the frontend talks to it

The React site calls the endpoint defined in `src/lib/reviewsApi.ts`:

```
REVIEWS_API = process.env.NEXT_PUBLIC_REVIEWS_API || "/api/reviews.php"
```

So by default the frontend expects `reviews.php` to live at **`/api/reviews.php`**
on the same domain as the website.

---

## Production deployment (Linux / cPanel)

1. **Build the static site** (see required step below first):
   ```
   npm run build
   ```
   This generates the static site in the `out/` folder.

2. **Upload** the contents of `out/` to your web root (e.g. `public_html/`).

3. **Create an `api` folder** in the web root and upload:
   - `reviews.php`
   - `reviews.json`
   So the final paths are:
   ```
   public_html/api/reviews.php
   public_html/api/reviews.json
   ```

4. **Make `reviews.json` writable** (file permissions `644`, or `666` if your host
   needs it). In cPanel File Manager: right-click → Change Permissions.

5. Done. Visit `/reviews` to submit and `/admin/reviews` to manage.

> If you host the PHP API on a **different domain**, set
> `NEXT_PUBLIC_REVIEWS_API=https://api.yourdomain.com/reviews.php` in a `.env.local`
> file **before** building. CORS is already enabled in `reviews.php`.

---

## Admin security (password)

Admin actions are protected on the server:

| Action | Method | Password required? |
|--------|--------|--------------------|
| List approved reviews | `GET` | No (public) |
| Submit a review | `POST` | No (public) |
| List **all** reviews | `GET ?all=true` | **Yes** |
| Approve / feature | `PATCH ?id=` | **Yes** |
| Delete | `DELETE ?id=` | **Yes** |

The password is checked via the `X-Admin-Password` request header. Set it in **two
places (they must match):**

- `reviews.php` → `$ADMIN_PASSWORD = "gemini2026";`
- `src/app/admin/reviews/page.tsx` → `const ADMIN_PASSWORD = "gemini2026";`

Change both to your own secret before deploying.

> Note: because the site is static, the admin page's password is bundled into the
> public JS. The PHP check still blocks anyone hitting the API directly without the
> header, but treat this as basic protection (fine for a small site). For stronger
> security, host the admin behind HTTP Basic Auth (cPanel "Directory Privacy").

## REQUIRED before building for production

Because the site is now a **static export** (`output: "export"`), the old Next.js
API routes must be removed or the build will fail. **Delete this folder:**

```
src/app/api
```

(The PHP backend fully replaces it.)

---

## Local development / testing

`next dev` cannot run PHP, so run PHP's built-in server for the backend:

1. Start the PHP server from this folder:
   ```
   php -S localhost:8000
   ```
   (The endpoint will be `http://localhost:8000/reviews.php`.)

2. Create `.env.local` in the project root:
   ```
   NEXT_PUBLIC_REVIEWS_API=http://localhost:8000/reviews.php
   ```

3. Run the site:
   ```
   npm run dev
   ```

Now submitting/approving/deleting reviews locally writes to this folder's
`reviews.json`.
