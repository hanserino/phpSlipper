<?php include_once $_SERVER['DOCUMENT_ROOT'] . "/header.php"; ?>
    <div data-block-height="3"></div>

        <!-- INDEX -->
        <h1>Index</h1>

        <div class="icon-check-sign"></div>
        <div data-block-height="3"></div>

        <img src="<?= $path['uri']['img'] ?>grumpyCat.jpg"/>

        <h2 class="fadeIn">This uses the .fadeIn class - it fades in when the body gets the class .fadeIn after document ready</h2>

        <div data-block-height="3"></div>
        <p>Over and under this is a spacing of 30px using an element with data-block-height="3"</p>
        <div data-block-height="3"></div>

        <div data-columns="4" data-mobile-columns="2">
            <div class="box"><div><img src="http://baconmockup.com/300/400" /></div></div>
            <div class="box"><div><img src="http://baconmockup.com/500/800" /></div></div>
            <div class="box"><div>Box</div></div>
            <div class="box"><div>Box</div></div>
            <div class="box"><div>Box</div></div>
            <div class="box"><div>Box</div></div>
            <div class="box"><div>Box</div></div>
            <div class="box"><div>Box</div></div>
            <div class="box"><div>Box</div></div>
            <div class="box"><div>Box</div></div>
            <div class="box"><div>Box</div></div>
            <div class="box"><div>Box</div></div>
            <div class="box"><div>Box</div></div>
        </div>

        <div data-block-height="3"></div>

<?php include_once $_SERVER['DOCUMENT_ROOT'] . "/footer.php"; ?>