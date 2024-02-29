export interface MaharajaUser {
    name: string | "",
    mobileNumber: string | "",
    dob: string | "",
    maritalStatus: string | "",
    anniversaryDate: string | "",
    emailId: string | "",
    address: string | "",
    streetName: string | "",
    city: string | "",
    state: string | "",
    region: string | "",
    pincode: string | "",
    kycDetails: KycDetails

}

interface KycDetails {
    aadharNo: string | "",
    aadharFront: string | "",
    aadharBack: string | "",
    panNo: string | "",
    panPic: string | ""
}