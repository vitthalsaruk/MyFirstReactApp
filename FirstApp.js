function Person(props) {
  return(
    <div className="personCss">
      <h1>{props.name}</h1>
      <p>Age:{props.age}</p>
    </div>  
  );
}

var app=(
<p>  
<Person name="Vitthal" age="29" />
<Person name="Ram" age="30" />
</p>
    );

ReactDOM.render(app,document.querySelector('#app'));

/*ReactDOM.render(<Person name="Vitthal" age="29" />, document.querySelector('#p1'));
ReactDOM.render(<Person name="Ram" age="30" />, document.querySelector('#p2'));*/

