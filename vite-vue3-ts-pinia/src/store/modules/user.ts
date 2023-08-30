import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
    state: () => {
        return {
            name: '张三',
        };
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        },
    },
});

export default useUserStore;
