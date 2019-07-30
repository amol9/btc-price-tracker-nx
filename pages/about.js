import Layout from '../components/Layout';


export default function About() {
    return (
        <Layout>
            <br/>
            <p className="d-flex justify-content-left lead">
                This is a sample app built to learn next.js. It uses coindesk api to get the bitcoin prices.
            </p>
        </Layout>
    )
}