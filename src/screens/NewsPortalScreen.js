import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

function NewsPortalScreen({ route, navigation }) {
  const { portal } = route.params;
  const [error, setError] = useState(false);

  // Define a function to handle webview errors
  const handleWebViewError = () => {
    setError(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {error ? (
        <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 20 }}>
          Error: Unable to load the web page.
        </Text>
      ) : (
        <WebView
          source={{ uri: portal.url }}
          onError={handleWebViewError} // Attach the error handler
        />
      )}
      
    </View>
  );
}

export default NewsPortalScreen;
