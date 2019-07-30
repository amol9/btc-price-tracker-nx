import fetch from 'isomorphic-unfetch';


export default function Prices({ data }) {
    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h4>Prices</h4>
            <p>Updated: { data.time.updated }</p>
            <br/>

            <div>
                <table className="table">
                    <tr scope="row">
                        <td>USD</td>
                        <td>{data.bpi.USD.rate}</td>
                    </tr>
                    <tr scope="row">
                        <td>GBP</td>
                        <td>{data.bpi.GBP.rate}</td>
                    </tr>
                    <tr scope="row">
                        <td>EUR</td>
                        <td>{data.bpi.EUR.rate}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}