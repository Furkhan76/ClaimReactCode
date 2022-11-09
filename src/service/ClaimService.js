import axios from "axios";

class ClaimService{

    getAllClaims(){
        
        return axios.get("http://localhost:8080/claim/ClaimManagementSystem/ClaimDetails");
    }
    saveClaim(claims){
        
        return axios.post("http://localhost:8080/claim/ClaimManagementSystem/addclaims",claims);
    }
    getClaimById(claimId){
        
        return axios.get("http://localhost:8080/claim/ClaimManagementSystem/getClaimDetails/"+claimId);
    }

}

export default new ClaimService();

