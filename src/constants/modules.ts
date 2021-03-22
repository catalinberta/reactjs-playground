import RoutePaths from './route-paths';

interface IModule {
	id: string;
	name: string;
	label: string;
	routePath: string;
}

interface IModules {
	[key: string]: IModule;
}

const modules: IModules = {
	reduxClassic: {
		id: 'reduxClassic',
		name: 'Redux Classic',
		label: 'Redux Classic (Notes App)',
		routePath: RoutePaths.ReduxClassic,
	},
	reduxToolkit: {
		id: 'reduxToolkit',
		name: 'Redux Toolkit',
		label: 'Redux Toolkit (Notes App)',
		routePath: RoutePaths.ReduxToolkit,
	},
	useCallbackAndUseMemo: {
		id: 'useCallbackAndUseMemo',
		name: 'useCallback() && useMemo()',
		label: 'useCallback() && useMemo()',
		routePath: RoutePaths.UseCallbackAndUseMemo,
	},
};

export default modules;
