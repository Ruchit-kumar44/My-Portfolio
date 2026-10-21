export default function RevealDiv() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-20 bg-linear-to-t mask-[linear-gradient(to_top,black_40%,transparent)] backdrop-blur-xs"
    />
  );
}
