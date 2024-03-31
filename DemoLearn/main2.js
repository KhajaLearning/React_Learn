const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function renderElement() {
  const element = (
    <div className="post">
      <h1>Our first blog post</h1>
      <div>Author: Naveen & Nirmal</div>
      <div>Published: {new Date().toLocaleTimeString()}</div>
      <p>
        I am new to blogging and this is our first post. you should expect a lot
        of great things from us.
      </p>
    </div>
  );
  root.render(element);
}

setInterval(renderElement, 1000);
