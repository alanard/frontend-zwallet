<template>
  <div class="footer">
    <div class="footer-content">
      <div class="brand-footer">Zwallet</div>
      <div class="title-footer">
        Simplify financial needs and saving <br />
        much time in banking needs with <br />
        one single app.
      </div>
      <hr />
      <div class="footer-contact">
        <div class="copyright">&copy; 2020 Zwallet. All right reserved.</div>
        <div class="contact-info">
          <span>+62 5637 8882 9901</span> &nbsp;&nbsp;&nbsp;
          <span>contact@zwallet.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  border: 1px solid #6379f4;
  background: #6379f4;
}

.footer .footer-content {
  /* border: 1px solid black; */
  width: 80%;
  margin: 70px auto;
}

.footer-content .brand-footer {
  /* border: 1px solid black; */
  font-weight: bold;
  font-size: 36px;
  color: #ffffff;
}

.footer-content .title-footer {
  /* border: 1px solid black; */
  font-weight: normal;
  font-size: 18px;
  color: rgba(239, 239, 239, 0.75);
  margin: 20px 0px 20px 0px;
}

.footer-content hr {
  background: rgba(255, 255, 255, 0.6);
  margin: 30px 0px 30px 0px;
}

.footer-contact {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  font-size: 16px;
  line-height: 28px;

  color: #efefef;
}

.footer-contact .copyright {
  /* border: 1px solid black; */
}

.footer-contact .contact-info {
  /* border: 1px solid black; */
}

.footer-contact .contact-info span {
  margin-left: 40px;
}
</style>
