  // index.js
  const dotenv = require("dotenv");

  // Load environment variables from .env file
  const result = dotenv.config();
  
  if (result.error) {
    console.error("Error loading .env file:", result.error);
  } else {
    console.log(".env file loaded successfully:", result.parsed);
  }
  
  // Continue with your existing code...
  
  const { DefaultAzureCredential } = require("@azure/identity");
  const { SecretClient } = require("@azure/keyvault-secrets");

  const vaultName = `keyvault-forproject2`;
  const secretName = `secret`;
  const keyVaultUrl = `https://keyvault-forproject2.vault.azure.net/`;

  async function getSecretFromKeyVault() {
    const credential = new DefaultAzureCredential();
    const client = new SecretClient(keyVaultUrl, credential);
  
    const secret = await client.getSecret(secretName);
    return secret.value;
  }
  
  // Usage
  getSecretFromKeyVault()
    .then(secret => {
      console.log("Secret retrieved from Key Vault:", secret);
    })
    .catch(err => {
      console.error("Error retrieving secret:", err);
    });
  