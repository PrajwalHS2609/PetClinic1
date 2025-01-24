import DogWalkerHeader from "@/components/DogWalker/DogWalkeHeader";
import DogWalkerContent from "@/components/DogWalker/DogWalkerContent";
import DogWalkerMain from "@/components/DogWalker/DogWalkerMain";
import SubServiceTakeCare from "@/components/SubServiceComponent/SubServiceTakeCare";

export default function DogWalker() {
  return (
    <div className="main-container">
      <DogWalkerHeader />
      <DogWalkerMain />
      <div className="main-content">
        <SubServiceTakeCare />
        <DogWalkerContent />
      </div>
    </div>
  );
}
