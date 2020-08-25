TRUNCATE TABLE s_userinfo;
TRUNCATE TABLE S_Address;

TRUNCATE TABLE  s_orderdetail;
TRUNCATE TABLE S_CommentDetail;
TRUNCATE TABLE S_Collect_Share_Detail;
TRUNCATE TABLE S_Message;
TRUNCATE TABLE S_IntegralDetail;


UPDATE S_Product SET CNum=0 ,Pro_NewCount=Pro_SumCount;

UPDATE s_userinfo SET sumscore=0 ;

SELECT * FROM s_userinfo 

SELECT * FROM s_banner

SELECT *  FROM S_Product 

WHERE pro_name LIKE '%女士水果印花短袖短裤套装%'

SELECT * FROM s_orderdetail WHERE ordernum='BMC202007211595332920982'

UPDATE  s_userinfo SET SumScore=SumScore-SELECT  SUM(t2.Score*t1.num) FROM s_orderdetail t1 
                JOIN s_product t2 ON t2.Pro_Id=t1.PId
                WHERE t1.OrderNum='BMC202007211595332920982'(
                )
                WHERE UId=3} ;