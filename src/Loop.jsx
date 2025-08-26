function Loop() {
    let users = [
        {
            name: "ehtesham",
            age: 22,
            education:"BS"
        },
        {
            name: "zamin",
            age: 28,
            education:"Phd"
        },
        {
            name: "abbass",
            age: 32,
            education:"BS"
        },
        {
            name: "zimal",
            age: 19,
            education:"BS"
        }
    ]
    return (
        <div>
            <table border="2">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Qualification</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{ user.age}</td>
                            <td>{ user.education}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}
export default Loop;
