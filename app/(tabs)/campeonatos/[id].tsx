import CampeonatoDetalheScreen from "@/components/templates/campeonatos";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function ChampionshipsScreen() {
    const { id } = useLocalSearchParams();

  return (
   <CampeonatoDetalheScreen id={id}/>
  )
}
