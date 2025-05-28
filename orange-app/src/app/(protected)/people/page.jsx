import ProtectedListPage from "@/components/ProtectedList.Page";

function PeoplePage() {
  return(
    <ProtectedListPage 
      endpoint="people" 
      pageTitle="LIST OF PEOPLE"
      itemTypeName="pessoas" 
    />
  );
}


export default PeoplePage;
