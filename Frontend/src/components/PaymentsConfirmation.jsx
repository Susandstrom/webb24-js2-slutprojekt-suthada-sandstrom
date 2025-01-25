export function PaymentsConfirmation({setCurrentPage}){
    return(
        <div>
            <h2>Thank you for your Purchase!</h2>

            <button onClick={() => setCurrentPage('browsing')}>Take me back</button>
        </div>
    )
}