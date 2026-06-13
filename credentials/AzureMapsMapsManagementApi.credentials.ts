import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureMapsMapsManagementApi implements ICredentialType {
        name = 'N8nDevAzureMapsMapsManagementApi';

        displayName = 'Azure Maps Maps Management API';

        icon: Icon = { light: 'file:../nodes/AzureMapsMapsManagement/azure-maps-maps-management.png', dark: 'file:../nodes/AzureMapsMapsManagement/azure-maps-maps-management.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Maps Maps Management API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
