export default async function getInstance() {
  try {
    const response = await fetch(window.location.href, {
      method: "HEAD",
    });
    if (!response.ok || !response.headers.get("X-Instance-ID")) {
      throw new Error('Não foi possível identificar a instância');
    }
    const instanceID = response.headers.get("X-Instance-ID")!;
    return instanceID;
  } 
  catch (error) {
    console.log(error);
    return 'error';
  }
}