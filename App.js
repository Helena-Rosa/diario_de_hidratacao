import { View } from "react-native";
import {Header} from "./src/components/Header";
import { WaterProgress } from "./src/components/WaterProgress";
import { ActionButtons } from "./src/components/ActionButtons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  const GOAL = 2000; //Meta diaria em ml
  const [consumed, setConsumed] = useState(0);

  const handleaddWater = (amount) =>{}

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header  />
        <WaterProgress  />
        <ActionButtons  />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

