import { createPopper } from "@popperjs/core";

export const poperHelpers = {
    methods: {
        phWithPopper(dropdownList, component, { width }) {
            dropdownList.style.width = width;
            dropdownList.classList.add("custom-select-dropdown");
            const popper = createPopper(component.$refs.toggle, dropdownList, {
                placement: "bottom",
                modifiers: [
                    {
                        name: "offset", options: {
                            offset: [0, -1],
                        },
                    },
                    {
                        name: "toggleClass",
                        enabled: true,
                        phase: "write",
                        fn({ state }) {
                            component.$el.classList.toggle("drop-up", state.placement === "top");
                        },
                    }],
            });

            return () => popper.destroy();
        },
    },
};
