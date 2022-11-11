const Blog = () => {

  return (
    <div className="container mx-auto">
      <div className="mb-12">
        <h2 className="font-semibold text-xl md:text-3xl mb-4">1. Difference between SQL and NoSQL</h2>
        <p className="ml-4 md:ml-6">
          <span className="font-semibold underline mr-6">Ans:</span>
          <span>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.There are five practical differences between SQL and NoSQL: Language, Scalability, Structure, Properties, Support and communities.</span>
        </p>
      </div>
      <div className="mb-12">
        <h2 className="font-semibold text-xl md:text-3xl mb-4">2. What is JWT, and how does it work?</h2>
        <p className="ml-4 md:ml-6">
          <span className="font-semibold underline mr-6">Ans:</span>
          <span>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</span>
        </p>
        <p className="ml-4 md:ml-6 mt-2">Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
      </div>
      <div className="mb-12">
        <h2 className="font-semibold text-xl md:text-3xl mb-4">3. What is the difference between javascript and NodeJS?</h2>
        <p className="ml-4 md:ml-6">
          <span className="font-semibold underline mr-6">Ans:</span>
          <span>The Differences between Node.js and Javascript is: </span>
        </p>
        <p className="ml-4 md:ml-6 mt-2">i. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Node.js, on the other hand, is a V8-based server-side programming language. As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.</p>
        <p className="ml-4 md:ml-6 mt-2">ii. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
        <p className="ml-4 md:ml-6 mt-2">iii. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
      </div>
      <div className="mb-12">
        <h2 className="font-semibold text-xl md:text-3xl mb-4">4. How does NodeJS handle multiple requests at the same time?</h2>
        <p className="ml-4 md:ml-6">
          <span className="font-semibold underline mr-6">Ans:</span>
          <span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</span>
        </p>
      </div>
    </div>
  );
}

export default Blog;
