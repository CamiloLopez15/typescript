"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || "----"}`;
        else
            return `${firstName} ${lastName || "----"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
