function Welcome(props){
    console.log(props)
    return <h2>Welcome to our React Ecommerce website, {props.name} {props.title}!!</h2>
}

export default Welcome;