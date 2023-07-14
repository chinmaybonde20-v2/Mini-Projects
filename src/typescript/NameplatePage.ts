// imported Libraries
import { ref } from "vue";

// Variables
export const show = ref(false);
export const flatNum = ref();
export const ownerinfoarr: owner[] = [];
export const flagstatus = ref();
export const flag = ref(false);

// Fetch flat no on form
export const fetchFlatno = (flatNo: number) => {
    show.value = true;
    flatNum.value = flatNo;
};

interface owner {
    flatNo: any;
    ownerName: string;
    ownerEmail: string;
    ownerMob: string;
    btnclose: boolean;
}

// Create multiobject array
export const createObjects = (totalfloors: any, totalflats: any, flag: boolean) => {
    flagstatus.value = flag;
    if (flagstatus.value === true) {
        for (let i = 1; i <= totalfloors; i++) {
            for (let j = 1; j <= totalflats; j++) {
                const newObj: owner = {
                    flatNo: i + "0" + j,
                    ownerName: "",
                    ownerEmail: "",
                    ownerMob: "",
                    btnclose: false
                };

                ownerinfoarr.push(newObj);
                console.log(ownerinfoarr);
            }
        }
    }


};

// Match obj and push on flat no btn
export const ownerinfoFunc = (ownerinfoobj: {
    ownerInputFlatNo: string;
    name: string;
    email: string;
    number: string;
}) => {
    const index = ownerinfoarr.findIndex(
        (x) => x.flatNo === ownerinfoobj.ownerInputFlatNo.value
    );

    // console.log(index);

    if (index >= 0) {
        ownerinfoarr[index].ownerName = ownerinfoobj.name;
        ownerinfoarr[index].ownerEmail = ownerinfoobj.email;
        ownerinfoarr[index].ownerMob = ownerinfoobj.number;
        ownerinfoarr[index].btnclose = true;
    }
    return 0;
};

// Close form
export const Close = (open: boolean) => {
    show.value = open;
};

