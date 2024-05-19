import { defineConfig } from '@wagmi/cli';
import { contracts } from './src/config/contract';
import { react } from '@wagmi/cli/plugins';

export default defineConfig({
	out: 'src/config/generated.ts',
	contracts: [...contracts],
	plugins: [react()],
});
