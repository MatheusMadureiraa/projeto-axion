import ProtectedListPage from "@/components/ProtectedList.Page";

function PlacesPage() {
  return(
    <ProtectedListPage 
      endpoint="places" 
      pageTitle="LIST OF PLACES"
      itemTypeName="locais" 
    />
  );
}


export default PlacesPage;