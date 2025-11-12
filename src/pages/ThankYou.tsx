const ThankYou = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-secondary">
    <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
      Thank You! 
    </h1>
    <p className="text-xl text-muted-foreground max-w-xl">
      Your message has been sent successfully. I’ll get back to you as soon as possible.
    </p>
    <a
      href={`${import.meta.env.BASE_URL}`}
      className="mt-8 text-primary hover:underline font-medium"
    >
      Back to Home
    </a>
  </section>
);

export default ThankYou;
