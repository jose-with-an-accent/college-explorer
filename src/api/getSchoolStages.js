export default function getSchoolStages(stageNumber) {
    switch(stageNumber){
        case 0: return "Want to Apply"
        case 1: return "Finished Basic App"
        case 2: return "Finished Essays"
        case 3: return "Waiting for Response"
        default: return "Dropped"
    }
}