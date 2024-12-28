import EmergencyAssistance from "../components/EmergencyAssistance";
import Header from "../components/header";

export default async function HomePage() {
    return (
        <div>
            <Header />
            <EmergencyAssistance />
        </div>
    );
}
