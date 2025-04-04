# AWS Free Tier Infrastructure Setup

This Terraform project sets up an AWS Free Tier infrastructure including:
- An S3 bucket configured for static website hosting
- A CloudFront distribution for content delivery
- An IAM user with AdministratorAccess for Terraform operations

## Prerequisites
- An AWS account
- Terraform installed locally
- AWS CLI configured with credentials

## Setup Instructions
1. create this repository:
   ```sh
   cd terraform-s3-bucket-website
   git init
   ```
2. Initialize Terraform:
   ```sh
   terraform init
   ```

3. Plan the infrastructure:
   ```sh
   terraform plan
   ```

4. Apply the configuration:
   ```sh
   terraform apply
   ```

5. Once completed, Terraform will output the CloudFront URL, which can be used to access the hosted website.

## Cleanup
To avoid incurring charges, destroy the infrastructure when no longer needed:
```sh
terraform destroy
```

## Notes
- Ensure your AWS credentials have the necessary permissions.
- CloudFront can take time to propagate changes.

## License
This project is open-source and available under the MIT License.

