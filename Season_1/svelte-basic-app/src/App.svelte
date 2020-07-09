<script>
    let count = 0;
    const incrementCounter = () => count++;
</script>

<style>
    .topnav {
        overflow: hidden;
        background-color: dodgerblue;
    }

    .topnav a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        font-size: 17px;
    }

    p {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, 50%);
    }

    .fab{
        position: absolute;
        bottom: 60px;
        right: 60px;
    }

    .fab_action{
        cursor: pointer;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .fa-plus{
        background-color: dodgerblue;
        border-radius: 50%;
        color: #fff;
        padding: 16px;
    }
</style>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="topnav">
    <a href="#">
        <i class="fa fa-bars"></i>
    </a>
</div>
<p>
    You have pushed the button this many times: { count }
</p>

<section class="fab" on:click={incrementCounter}>
    <div class="fab_action">
        <i class="fa fa-plus"></i>
    </div>
</section>