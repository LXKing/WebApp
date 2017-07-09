import * as types from './types'

export default {
	//显示进入首页/关闭
	showStartClose: ({
		commit
	}) => {
		commit(types.SHOWSTARTCLOSE);
	},
	//隐藏进入首页/关闭
	hideStartClose: ({
		commit
	}) => {
		commit(types.HIDESTARTCLOSE);
	},
	//显示引导页
	showGuidePage: ({
		commit
	}) => {
		commit(types.SHOWGUIDEPAGE);
	},
	//隐藏引导页
	hideGuidePage: ({
		commit
	}) => {
		commit(types.HIDEGUIDEPAGE);
	},

	//启动动画改变
	startAnimationChange: ({
		commit
	}, index) => {
		commit(types.STARTANIMATIONCHANGECHANGE, index);
	},

	showStartAnimation: ({
		commit
	}) => {
		commit(types.SHOWSTARTANIMATION);
	},

	hideStartAnimation: ({
		commit
	}) => {
		commit(types.HIDESTARTANIMATION);
	},

	showHeader: ({
		commit
	}) => {
		commit(types.SHOWHEADER);
	},
	hideHeader: ({
		commit
	}) => {
		commit(types.HIDEHEADER);
	}
}