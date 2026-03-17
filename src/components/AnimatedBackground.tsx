export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-100"
      >
        <source
          src="/space-background.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-background" />
      </video>
      
      {/* Overlay to ensure text readability and blend with theme */}
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      
      {/* Subtle orange glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.08),transparent_50%)]" />
    </div>
  );
}
