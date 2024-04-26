function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
        <p className="text-primary-foreground font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
