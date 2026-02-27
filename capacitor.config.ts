import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.tokittoo.portfolio',
    appName: 'portfolio',
    webDir: 'out',
    server: {
        androidScheme: 'https'
    },
    plugins: {
        CapacitorHttp: {
            enabled: true,
        },
    },
};

export default config;
