import './App.css';



function Article(props) {

    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}

function Header(props) {
    console.log('props', props, props.title);
    return <header>
        <h1>
            <a
                href='/'
                onClick={(event) => {
                    event.preventDefault();
                    props.onChangeMode();
                }}>{props.title}</a>
        </h1>
    </header>
}

function Nav(props) {
  const list = [

      <li>
          <a href='/read/1'>html</a>
      </li>,
      <li>
          <a href='/read/2'>css</a>
      </li>,
      <li>
          <a href='/read/3'>js</a>
      </li>
  ]

  for (let i = 0; i < props.name.length; i++) {

      let b = props.name[i];
      list.push(<li key={b.id}>

          <a id={b.id} href={'/read/' + b.id} onClick={event=>{
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}>{b.title}</a>
      </li>)
  }

  return <nav>
      <ol>
          {list}
      </ol>
  </nav>
}

// ----------------------------------------------

function App() {

    const name = [

        {
            id: 1,
            title: 'html',
            body: 'html is ...'
        }, {
            id: 2,
            title: 'css',
            body: 'css is ...'
        }, {
            id: 3,
            title: 'javascript',
            body: 'javascript is ...'
        }

    ]
    return (
        <div>
            <Header
                title="REACT"
                onChangeMode={() => {
                    alert('Header');
                }}></Header>
            <Nav name={name} onChangeMode = {(id)=>{
              alert(id);
            }}></Nav>
            <Article title="Welcome" body="Hello, Web"></Article>
            <Article title="Bye" body="bye, Web"></Article>
        </div>
    );
}
export default App;
