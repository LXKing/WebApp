import * as types from './types'
import getters from './getters'

const state = {
	showStartCloseType: false,
	showGuidePageType: true,

	showHeaderType: true,
	//startAnimationIndex: 0,
	showStartAnimationType: true

}

const mutations = {
	[types.SHOWSTARTCLOSE](state) {
		state.showStartCloseType = true;
	},
	[types.HIDESTARTCLOSE](state) {
		state.showStartCloseType = false;
	},

	[types.SHOWGUIDEPAGE](state) {
		state.showGuidePageType = true;
	},
	[types.HIDEGUIDEPAGE](state) {
		state.showGuidePageType = false;
	},

	[types.STARTANIMATIONCHANGECHANGE](state, index) {
		state.startAnimationIndex = index;
	},

	[types.SHOWSTARTANIMATION](state) {
		state.showStartAnimationType = true;
	},
	[types.HIDESTARTANIMATION](state) {
		state.showStartAnimationType = false;
	},

	[types.SHOWHEADER](state) {
		state.showHeaderType = true;
	},
	[types.HIDEHEADER](state) {
		state.showHeaderType = false;
	}
}

export default {
	state,
	mutations,
	getters
}