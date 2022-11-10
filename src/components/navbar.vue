<template>
    <div class="navbar">
        <nav>
            <a href="" v-if="name == 'chien' ">bankName</a>
            <a href="" v-else>prout</a>

            <h1>{{name}}</h1>
            <ul>
                <li>
                    <a href=""><span class="material-symbols-outlined">
                        live_help
                        </span>
                        
                        </a>
                </li>   
                <li>
                        <a href=""><span class="material-symbols-outlined">
                            notifications
                            </span></a></li>
                <li><a href=""><span class="material-symbols-outlined">
                    settings
                    </span></a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            name:"chien"          
        }
    }
}

</script>