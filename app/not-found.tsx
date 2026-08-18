import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-6 py-24 text-center">
      <p className="font-mono text-6xl font-extrabold text-accent">404</p>
      <h1 className="mt-4 text-xl font-semibold text-text-primary">This page wandered off</h1>
      <p className="mt-2 text-sm text-text-secondary">
        That docs page doesn&apos;t exist, or it moved with the split.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md bg-text-primary px-4 py-2 text-sm font-medium text-background hover:opacity-80"
      >
        Back to docs
      </Link>
    </div>
  );
}
