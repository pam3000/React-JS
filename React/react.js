*part1/NamedComponent.js*

```jsx
/** NamedComponent: greets
 *
 * Props:
 * - name: name to introduce self with
 */

function NamedComponent({ name }) {
  return <p>My name is {name}.</p>;
}
```

*part1/App.js*

*part1/NamedComponent.js*

```jsx
/** NamedComponent: greets
 *
 * Props:
 * - name: name to introduce self with
 */

function NamedComponent({ name }) {
  return <p>My name is {name}.</p>;
}
```

/** Tweet: a single tweet.
 *
 * Props:
 * - name
 * - username
 * - data
 * - message
 */

function Tweet({ date, message, name, username }) {
    return (
      <div className="tweet">
        <span>{name}</span>
        <span className="username">{username}</span>
        <span className="date">{date}</span>
        <p>{message}</p>
      </div>
    );
  }function App() {
    return (
      <div>
        <Tweet
          name="Matt Lane"
          username="mmmaaatttttt"
          date={new Date().toDateString()}
          message="This app will disrupt everything!!"
        />
        <Tweet
          name="Elie Schoppik"
          username="eschoppik"
          date={new Date().toDateString()}
          message="#Ilovehashtags"
        />
        <Tweet
          name="Tim Garcia"
          username="TimGarcia0"
          date={new Date().toDateString()}
          message="Follow me on Twitter!"
        />
      </div>
    );
  }const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App />
  );