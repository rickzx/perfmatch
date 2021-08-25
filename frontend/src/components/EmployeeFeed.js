const EmployeeFeed = ( { employeeFeed } ) => {
    return (
        <>
            {employeeFeed.map( employee => (
                <h3 key={employee.id}> {employee.name} {employee.age} </h3>
            ))}
        </>
    )
}

export default EmployeeFeed
