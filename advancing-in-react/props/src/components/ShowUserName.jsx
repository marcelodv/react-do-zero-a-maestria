export default function ShowUserName (props) {
    console.log(props)

    return (
        <div>
            <h2>O nome do usuário: {props.name}</h2>
            <hr />
        </div>
    )
} 