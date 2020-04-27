import React from 'react';

const filterContext = React.createContext({
	filters: [],
	currentJobFilter: null,
	filterClick: () => {}

})

export default filterContext;