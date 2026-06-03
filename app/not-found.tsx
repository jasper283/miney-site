export default function NotFound() {
  return (
    <main className="miney-shell py-24">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-fd-muted-foreground">The page you requested does not exist.</p>
      <a className="miney-button mt-6" href="/">
        Back home
      </a>
    </main>
  );
}
