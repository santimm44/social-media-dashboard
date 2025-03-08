export const socialMediaData = async()=>{
    const response = await fetch("https://socialmediadashboarddata.blob.core.windows.net/socialmediadata/social-media-dashboard-data.json")
    const data = await response.json()
    return data
}