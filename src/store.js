import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

// Write state which you want to have in global scope and method for a commit
export default new Vuex.Store({
    state: {
        level: 1,
        experiencePoint: 0,
    },
    mutations: {
        setExperiencePoint(state, point) {
            state.experiencePoint += point;
            if (state.experiencePoint === 10) {
                state.experiencePoint = 0;
                state.level += 1;
            }
        }
    },
})