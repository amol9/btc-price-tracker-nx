import Layout from '../components/Layout';
import Prices from '../components/Prices';


export default function Index(props) {
    return (
        <Layout>
            <h1 style={ h1Style() }>Bitcoin Price Tracker</h1>
            <br/>
            <Prices data={ props }/>
        </Layout>
    )
}

function h1Style() {
    return {
        textAlign: "center",
        width: "100%"
    }
}

Index.getInitialProps = async function () {
    console.log("in GIP");
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    var res = await fetch(url);
    var data = await res.json();
    console.log(data)
    return data;
}