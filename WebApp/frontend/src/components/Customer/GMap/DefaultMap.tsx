import React from 'react'
import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'
import './DefMap.css';

const option: IAzureMapOptions = {
    authOptions: {
      getToken: function (resolve, reject, map) {
        //URL to your authentication service that retrieves an Azure Active Directory Token.
        var tokenServiceUrl = "https://azuremapscodesamples.azurewebsites.net/Common/TokenService.ashx";

        fetch(tokenServiceUrl).then(r => r.text()).then(token => resolve(token));
    },

        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: '5AsDU8thi2C_PVWUV1KxgiMN6rwPtZEXRkJkw6lF1AY' // Your subscription key
    },
}

const DefaultMap: React.FC = () => (
  <AzureMapsProvider>
    <div style={{ height: '300px' }}>
    <script src="https://atlas.microsoft.com/sdk/javascript/mapcontrol/2/atlas.min.js"></script>
    <script src="https://atlas.microsoft.com/sdk/javascript/service/2/atlas-service.min.js"></script>
      <AzureMap options={option} />
    </div>
  </AzureMapsProvider>
);

export default DefaultMap;