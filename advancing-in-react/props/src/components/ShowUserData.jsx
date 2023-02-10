export default function ShowUserData ({ name, age, city, activeUser, state }) {
    return (
        <div>
            <h2>Username: { name }</h2>
            <h2>Age: {age}</h2>
            <h2>City: {city}</h2>
            { state && <h2>State: {state}</h2>}
            { activeUser && <h3>Usuário ativo!</h3>}
            { !activeUser && <h3>Usuário inativo!</h3>}
            <hr/>
        </div>
    )
}